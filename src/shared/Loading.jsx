import { Oval } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}

      />
    </div>
  );
};

export default Loading;