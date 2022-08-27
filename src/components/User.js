import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import GithubContext from '../context/github/github-context';


const  User = ({user:{login,avatar_url,html_url}}) =>  {
    const { getUser } = useContext(GithubContext);
        return (
                <div className="col-lg-3 col-md-4 col-sm-6 ">
                    <div className="card mt-2">
                        <img src={avatar_url} alt="" className="img-fluid"/>
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                           
                            <Link onClick ={()=>getUser(login) } to={`/user/${login}`}  className="btn btn-primary btn-sm">Go Profile</Link>
                        </div>
                    </div>
                </div>
        )
    
}

export default User