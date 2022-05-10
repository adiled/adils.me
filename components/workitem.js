import Preview from './preview'

const WorkItem = ({ item }) => (
  <section className={'work-item'} style={item.theme}>
    <div className="date center">{item.date}</div>
    <header>
      <h1 className={'title'}>{item.title}</h1>
      <p className="short">{item.short}</p>  
    </header>
    <Preview screens={item.previews}/>
    <div className="information">
      <div className="specs">
        <p><span className="label">Role</span>{item.role}</p>
          <p><span className="label">Status</span>{item.status} {item.link ? <a href={item.link} target="_blank">🔗</a> : ''}</p>
        <br/>
        
      </div>
      <div className="details">
        <p>{item.details}</p>
        <div className="tech">
          <div className="items">
          {
            item.technologies.map(tech => (
              <div className="item">
                <img src={'/static/img/logos/'+tech.replace(' ', '').toLowerCase() + '.png'}/>
              </div>
            ))
          }
          </div>  
        </div>
      </div>
    </div>
  </section>
  )

export default WorkItem