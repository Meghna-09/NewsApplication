import React, { useState } from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    var [s, sets] = useState("")
    function getData(event) {
       sets(event.target.value)
    }
    function postData(event) {
        event.preventDefault()
        document.getElementById('search').value = ''
      props.searchNews(s)

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg background ">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light fs-2" to="#">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-4 text-light active " aria-current="page" to="/" onClick={() => props.searchNews('')}>All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4 text-light" to="/politics" onClick={() => props.searchNews('')}>Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4 text-light" to="/science" onClick={() => props.searchNews('')}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4 text-light" to="/covid" onClick={() => props.searchNews('')}>Covid-19</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link fs-4 text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/technology" >Technology </Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/education">Education </Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/entertainment">Entertainment </Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/crime">Crime </Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/sports">Sports </Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/business">Business </Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/cricket">Cricket </Link></li>
                                    <li><Link className="dropdown-item" onClick={() => props.searchNews('')} to="/jokes">Jokes </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle fs-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => props.changeLanguage('en')}>English</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changeLanguage('hi')}>Hindi</button></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle fs-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Article Size
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize('8')}>8</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize('12')}>12</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize('16')}>16</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize('20')}>20</button></li>

                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex w-50" role="search" onSubmit={postData}>
                            <input className="form-control me-2" type="search" name='search' id='search' placeholder="Search For News" aria-label="Search" onChange={getData} />
                            <button className="btn btn-outline-success" type="submit">Search </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

