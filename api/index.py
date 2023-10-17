from flask import Flask, request, send_file, jsonify
from io import BytesIO
import pandas as pd
import xml.etree.ElementTree as ET

app = Flask(__name__)

@app.route("/api/hello")
def hello():
    return "<p>Hello, Hooman!</p>"

@app.route('/api/convert', methods=['POST'])
def convert():
    file = request.files['excel_file']
    if file:
        try:
            questions = lire_fichier_excel(BytesIO(file.read()))
            xml_data = creer_fichier_moodle_xml(questions)

            mem = BytesIO()
            mem.write(xml_data)
            mem.seek(0)

            return send_file(mem, as_attachment=True, download_name='FichierConverti.xml', mimetype='application/xml')
        except Exception as e:  # Replace with more specific exceptions if possible
            return jsonify({'error': 'Format de fichier Excel invalide.', 'details': str(e)}), 400
    else:
        return jsonify({'error': 'Aucun fichier téléversé'}), 400

    


def lire_fichier_excel(chemin):
    df = pd.read_excel(chemin)

    questions = []
    for i, row in df.iterrows():
        question = {
            'question': str(row['question']),
            'reponses': {
                'A': str(row['reponseA']),
                'B': str(row['reponseB']),
                'C': str(row['reponseC']),
            },
            'bonneReponse': str(row['bonneReponse (A, B ou C)']),
        }
        questions.append(question)

    return questions

def creer_question_xml(question, question_num):

    
    # Créer l'élément question
    question_xml = ET.Element('question', type='multichoice')

    # Ajouter le nom de la question
    name = ET.SubElement(question_xml, 'name')
    text = ET.SubElement(name, 'text')
    padded_question_num = str(question_num).zfill(3)
    text.text = f'Question {padded_question_num}'


    # Ajouter le texte de la question
    question_text = ET.SubElement(question_xml, 'questiontext', format='html')
    text = ET.SubElement(question_text, 'text')
    # text.text = '<![CDATA[<p dir="ltr" style="text-align: left;">' + question['question'] + '</p>]]>'
    text.text = '<p dir="ltr" style="text-align: left;">' + question['question'] + '</p>'


    # Ajouter generalfeedback, defaultgrade, penalty, hidden, idnumber, single, shuffleanswers
    ET.SubElement(ET.SubElement(question_xml, 'generalfeedback', format='html'), 'text')
    ET.SubElement(question_xml, 'defaultgrade').text = '1'
    ET.SubElement(question_xml, 'penalty').text = '0.5'
    ET.SubElement(question_xml, 'hidden').text = '0'
    ET.SubElement(question_xml, 'idnumber')
    ET.SubElement(question_xml, 'single').text = 'true'
    ET.SubElement(question_xml, 'shuffleanswers').text = 'true'
    ET.SubElement(question_xml, 'answernumbering').text = 'abc'
    ET.SubElement(question_xml, 'showstandardinstruction').text = '0'
    ET.SubElement(ET.SubElement(question_xml, 'correctfeedback', format='html'), 'text').text = 'Votre réponse est correcte.'
    ET.SubElement(ET.SubElement(question_xml, 'partiallycorrectfeedback', format='html'), 'text').text = 'Votre réponse est partiellement correcte.'
    ET.SubElement(ET.SubElement(question_xml, 'incorrectfeedback', format='html'), 'text').text = 'Votre réponse est incorrecte.'
    ET.SubElement(question_xml, 'shownumcorrect')

    # Ajouter les réponses
    for lettre, reponse in question['reponses'].items():
        fraction = '100' if lettre == question['bonneReponse'] else '-50'
        answer = ET.SubElement(question_xml, 'answer', fraction=fraction, format='html')
        text = ET.SubElement(answer, 'text')
        # text.text = '<![CDATA[<p dir="ltr" style="text-align: left;">' + reponse + '<br></p>]]>'
        text.text = '<p dir="ltr" style="text-align: left;">' + reponse + '<br></p>'
        ET.SubElement(ET.SubElement(answer, 'feedback', format='html'), 'text')

    return question_xml


def creer_fichier_moodle_xml(questions):
    quiz = ET.Element('quiz')
    for i, question in enumerate(questions, start=1):
        question_xml = creer_question_xml(question, i)
        quiz.append(question_xml)

    return ET.tostring(quiz, encoding='utf-8', method='xml')

    



if __name__ == '__main__':
    app.run(port=5328)
