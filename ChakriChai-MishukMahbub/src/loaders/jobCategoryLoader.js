const jobCategoryLoader = async () => {
    const loadedCategories = await fetch('jobCategory.json');
    const categories = await loadedCategories.json();
    return categories;
}
export default jobCategoryLoader;