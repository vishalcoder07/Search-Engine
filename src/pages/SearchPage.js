import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom'
import Search from "../components/Search";

import Description from '@material-ui/icons/Description';
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/More";
// import response from '../responce';


function SearchPage() {

    const [{ term }, dispatch] = useStateValue("");

    //LIVE API CALL
    const {data} = useGoogleSearch(term);

    // const data = response;
    // console.log(data);

    return (
        <div className='searchPage'>

            {/* Search Page header start */}
            <div className="searchPage__header">

                <Link to="/">

                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />

                </Link>

                {/* Search page Header Body Start */}
                <div className="searchPage__headerBody">

                    <Search hideButtons />

                    {/* Search page Options start */}
                    <div className="searchPage__options">

                        {/* searchPage__optionsLeft Start*/}
                        <div className="searchPage__optionsLeft">

                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">ALL</Link>
                            </div>


                            <div className="searchPage__option">
                                <Description />
                                <Link to="/news">News</Link>
                            </div>

                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>

                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>

                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>

                        </div>
                        {/* searchPage__optionsLeft Ends */}


                        {/* searchPage__optionsRight Start*/}
                        <div className="searchPage__optionsRight">

                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>

                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>

                        </div>
                        {/* searchPage__optionsRight  Ends*/}

                    </div>
                    {/* Search page Options Ends */}

                </div>
                {/* Search page header body Ends */}
            </div>
            {/* Search page Header Ends */}


        {/* if user give us a term then and then only below code execute */}
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults}
                         results ({data?.searchInformation.formattedSearchTime}) for {term}

                        {/* About 3400000 results (2.00) for tesla */}
                    </p>


                    {data?.items.map(item => (
                        <div className="searchPage__result">

                            <a className="serchPage__dataLink" href={item.link} target="_blank">

                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchPage__resultImage"
                                            src={item.pagemap?.cse_image[0]?.src}
                                            alt=""
                                        />
                                    )}

                                {item.displayLink}

                            </a>

                            <a className="searchPage__resultTitle" href={item.link} target="_blank">
                                <h2>{item.title}</h2>
                            </a>

                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>

            )}


        </div>
    )
}

export default SearchPage
