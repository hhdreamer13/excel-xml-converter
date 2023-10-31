const TypeQcmRadio = ({ qcmType, setQcmType }) => {
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
            className='radio ml-2 checked:bg-teal-500'
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
            className='radio ml-2 checked:bg-teal-500'
          />
        </label>
      </div>
    </div>
  );
};

export default TypeQcmRadio;
