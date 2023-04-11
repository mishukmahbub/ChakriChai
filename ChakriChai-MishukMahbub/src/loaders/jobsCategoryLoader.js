const jobsCategoryLoader = async () => {
    const loadedCategories = await fetch(`jobsCategory.json`);
    const categories = await loadedCategories.json();
    return categories;
}
export default jobsCategoryLoader;