

export default function Repos({repo}){
    const { name , html_url,description,language} = repo;
    return <>
       
          <div className="repo">
            <h3>
              <a href={html_url}>{name}</a>
            </h3>
            <p>
              {description}
            </p>
            {language && <small>Written in {language}</small>}
          </div>   
          <hr /> 
    </>
}