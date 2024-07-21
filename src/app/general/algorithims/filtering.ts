// filter algorithim for project filter
// this is for the dropdown filter button
/**
 * 
 * @param projects 
 * 
 * the projects variable is an array of objects that contain:
 * - title
 * - description
 * - status
 * - created on date
 * - updated on date
 * users can filter out based on the above mentioned (this is what the filterType variable is for)
 * 
 * @param filterType 
 * 
 * by default, the projects are displayed in the order they were created
 * 
 * filtering by title can be filtered by:
 * - ascending
 * - descending
 * 
 * description cannot be filtered
 * 
 * status can be filtered by:
 * - completed
 * - in progress
 * - not started
 * 
 * created on date and updated on date can be filtered by:
 * - latest
 * - oldest
 * 
 */

export function projectsFilter(projects: Array<any>, filterType: String) {

    const filter = filterType.toUpperCase();
    
    switch (filter) {
        // tittle filter
        case "Ascending":
            return (
                projects.sort((a, b) => a.title.localeCompare(b.title))
            )
        case "Descending":
            return (
                projects.sort((a, b) => b.title.localeCompare(a.title))
            )
        // end of tittle filter

        // status filter
        case "Completed":
            return (
                projects.filter((project) => project.status === "Completed")
            )
        case "In Progress":
            return (
                projects.filter((project) => project.status === "In Progress")
            )
        case "Not Started":
            return (
                projects.filter((project) => project.status === "Not Started")
            )
        // end of status filter

        // created on/updated on date filter
        case "Latest":
            return (
                projects.sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime())
            )
        case "Oldest":
            return (
                projects.sort((a, b) => new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime())
            )
        // end of created on/updated on date filter

        default:
            return projects;

    }   
}