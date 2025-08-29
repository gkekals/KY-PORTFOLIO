import React from 'react'
import "./styles/Work.scss"
import work from '../../utils/work'
const Work = () => {

    return (
        <ul className="lst">
            {work.map(item => (
                <li key={item.id}>
                    <a className="t-wrap" href={item.links.demo} target="_blank" rel="noopener noreferrer">
                        <h4 className="list-lst">{item.title}</h4>
                        <p className="txt">{item.description}</p>
                        <div className="hash-wrap">
                            {item.tags.map(tag => (
                                <span className="hash" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </a>
                    <a className="img-wrap bg" href={item.links.demo} target="_blank" rel="noopener noreferrer">
                        <img src={item.thumbnail} alt={item.title} />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Work