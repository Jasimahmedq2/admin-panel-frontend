import CardFour from "../components/cardFour";
import CardOne from "../components/cardOne";
import CardThree from "../components/cardThree";
import CardTwo from "../components/cardTwo";
import ChartOne from "../components/chartOne";
import ChartThree from "../components/chartThree";
import ChartTwo from "../components/chartTwo";


const DashboardPage = () => {
    return (
        <div className="sm:px-12 sm:py-12 px-4 py-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardOne />
                <CardTwo />
                <CardThree />
                <CardFour />
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <ChartOne />
                <ChartTwo />
                <ChartThree />
            </div>
        </div>
    );
};

export default DashboardPage;
