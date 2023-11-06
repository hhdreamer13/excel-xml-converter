const TypeQcmRadio = ({ qcmType, setQcmType, penalty, setPenalty }) => {
  return (
    <div className='flex flex-col h-full justify-center items-center border py-2 px-4 rounded-lg'>
      <div className=''>
        <label className='label cursor-pointer hover:drop-shadow-md transition-all'>
          <span className='label-text'>3 choix de réponses</span>
          <input
            type='radio'
            name='qcmType'
            value='3'
            checked={qcmType === "3"}
            onChange={() => setQcmType("3")}
            className='radio ml-2 radio-accent w-5 h-5'
          />
        </label>
      </div>
      <div className=''>
        <label className='label cursor-pointer hover:drop-shadow-md transition-all'>
          <span className='label-text'>4 choix de réponses</span>
          <input
            type='radio'
            name='qcmType'
            value='4'
            checked={qcmType === "4"}
            onChange={() => setQcmType("4")}
            className='radio ml-2 radio-accent w-5 h-5'
          />
        </label>
      </div>
      <div className='mt-2 border-t'>
        <label className='label cursor-pointer hover:drop-shadow-md transition-all'>
          <span className='label-text'>
            Pénalité pour chaque mauvaise réponse
          </span>
          <div className='flex flex-col items-center justify-center gap-1'>
            <span className='label-text'>{penalty}</span>
            <input
              type='range'
              name='penalty'
              min='0'
              max='1'
              step='0.5'
              value={penalty}
              onChange={(e) => setPenalty(e.target.value)}
              className='range range-xs w-10 range-accent'
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default TypeQcmRadio;
