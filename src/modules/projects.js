class Project{
    constructor(name){
        this.name = name
    }
}

export const projectItem = {
    project_1: new Project('Default'),
    project_2: new Project("Fuck")
}

function createNewProject(name){
    
    const projectName = name+'_'+ String(getProjectId())
    
    projectItem[projectName] = new Project(name)
}

function getProjectId(){
    const projectKeys = Object.keys(projectItem)
    const lastProjectKey = projectKeys[projectKeys.length -1]
    const lastProjectCount = lastProjectKey.split('_')

    const newProjectCount = Number(lastProjectCount[1]) + 1

    return newProjectCount

}