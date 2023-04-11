const jobsCategoryLoader = async () => {
    const loadedCategories = await fetch(`jobsCategory.json`);
    const categories = await loadedCategories.json();

    // const loadedJobs = await fetch(`/jobs1234.json`);
    // const jobs = await loadedJobs.json();
    // console.log(jobs);
    return categories;
}
export default jobsCategoryLoader;