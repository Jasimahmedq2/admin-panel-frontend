import Breadcrumb from '../components/breadCrump.jsx';
import ChartFour from '../components/chartFour.jsx';
import ChartOne from '../components/chartOne.jsx';
import ChartThree from '../components/chartThree.jsx';
import ChartTwo from '../components/chartTwo.jsx';


const HomePage = () => {
    return (
        <div className='sm:px-8 sm:py-12 p-2'>
            <Breadcrumb pageName="Chart" />

            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <div className="col-span-12">
                    <ChartFour />
                </div>
                <ChartOne />
                <ChartTwo />
                <ChartThree />
            </div>
        </div>
    );
};

export default HomePage;