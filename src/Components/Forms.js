import LocalBody from "./LocalBody";
import PermitAndOccupancy from "./PermitAndOccupancy";
import SurveyDetails from "./SurveyDetails";


export const Head = [
    {
        question: 'Local Body Details',
        answer: <LocalBody />
    },
    {
        question: 'Permit & Occupancy Details',
        answer: <PermitAndOccupancy />
    },
    {
        question: 'Survey Details | Village Details',
        answer: <SurveyDetails />
    }
];