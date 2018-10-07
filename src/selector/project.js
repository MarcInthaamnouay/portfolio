import project from '../json/project.json'

/**
 * Read And Parse JSON
 * 
 * @return {Object} project
 */
const readAndParseJSON = () => {
  if (typeof project === 'undefined') {
    return
  }

  const projects = project.map((p, i) => {
    return {
      id: i,
      name: p.name,
      type: p.type,
      desc: p.description,
      lang: p.languages,
      lib: p.framework || [],
    }
  })

  return projects;
}

export default readAndParseJSON
