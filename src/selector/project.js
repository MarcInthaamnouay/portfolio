import project from '../json/project.json'

/**
 * Read And Parse JSON
 * 
 * @return {Object} project
 */
const readAndParseJSON = () => {
  if (project === undefined) {
    return
  }

  const projects = project.map(p => {
    return {
      id: p.id,
      name: p.name,
      type: p.type,
      desc: p.description,
      lang: p.languages,
      lib: p.framework || [],
    }
  })

  return projects;
}

/**
 * Get Project By Id
 * 
 * @param {Number} id
 * @return {Object} project 
 */
const getProjectById = id => {
  if (id > project.length) {
    return project[0]
  }

  const parsedId = parseInt(id)
  const pj = project.filter(proj => proj.id === parsedId)

  return pj[0]
};

export default readAndParseJSON

export { getProjectById }
