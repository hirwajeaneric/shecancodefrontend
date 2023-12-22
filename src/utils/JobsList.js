import { postDateCounter } from "./PostDaysCounter";
import JOB_LISTINGS from './JobList.json';

export const generateJobs = () => {
    for (const job of JOB_LISTINGS) {
        job.postedSince = postDateCounter(new Date(job.postTime));
    }
    return JOB_LISTINGS;
};