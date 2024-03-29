
function Header() {

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="..." alt="" width="30" height="24" className="d-inline-block align-text-top" />
            AMRIT JIVAN HOTEL & RESORT
          </a>
        </div>
      </nav>

      <div className="container mb-3">
        {/* Your top bar content */}

        <div className="container mb-3">
      <div className="row py-2 align-items-center top-bar-wrapper">
        <div className="col-5 col-sm-6 d-flex align-items-center px-2">
          <a
            className="top-bill-box requestbillpopup me-3 d-flex"
            data-bs-toggle="modal"
            data-bs-target="#billpopup"
          >
            <svg
              id="Group_6817"
              data-name="Group 6817"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_5090"
                    data-name="Rectangle 5090"
                    width="20"
                    height="20"
                    fill="#f8c400"
                  ></rect>
                </clipPath>
              </defs>
              <g
                id="Group_6135"
                data-name="Group 6135"
                clipPath="url(#clip-path)"
              >
                <path
                  id="Path_16927"
                  data-name="Path 16927"
                  d="M14.21,7.77a.755.755,0,0,1-.75.75H8.54a.75.75,0,0,1,0-1.5h4.92a.749.749,0,0,1,.75.75"
                  fill="#f8c400"
                ></path>
                <path
                  id="Path_16928"
                  data-name="Path 16928"
                  d="M13.5,10.02a.75.75,0,0,1,0,1.5H8.58a.75.75,0,0,1,0-1.5Z"
                  fill="#f8c400"
                ></path>
                <path
                  id="Path_16929"
                  data-name="Path 16929"
                  d="M15.5,3a1,1,0,0,0-1-1,1.019,1.019,0,0,0-.9.56.705.705,0,0,1-.62.44h-.46a.705.705,0,0,1-.62-.44A1,1,0,0,0,11,2a1.019,1.019,0,0,0-.9.56A.705.705,0,0,1,9.48,3H9.02a.705.705,0,0,1-.62-.44A1,1,0,0,0,6.5,3a1,1,0,0,0-1,1v7.42a.75.75,0,1,0,1.5,0V5.25a.755.755,0,0,1,.75-.75h6.5a.755.755,0,0,1,.75.75v10a1.25,1.25,0,0,1-1.25,1.25H13.5a1.5,1.5,0,0,1-1.41-1A1.386,1.386,0,0,1,12,15V14H1.5v1a.9.9,0,0,0,.02.23.318.318,0,0,0-.02.14A2.633,2.633,0,0,0,4.13,18h9.62a2.748,2.748,0,0,0,2.75-2.75V4a1,1,0,0,0-1-1"
                  fill="#f8c400"
                ></path>
              </g>
            </svg>
            <span className="ps-1">Bill</span>
          </a>

          <p className="top-table-box d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.14"
              height="18.14"
              viewBox="0 0 18.14 18.14"
            >
              <defs>
                <style>
                  {`.cls-5 {
                      fill: #646464;
                    }`}
                </style>
              </defs>
              <path
                id="cuttlery"
                className="cls-5"
                d="M9.07,0A9.075,9.075,0,0,0,0,9.07H0A9.07,9.07,0,1,0,9.07,0Zm3.58,15.28c-.2.12-.41.22-.62.32-.12.07-.16.01-.17-.11,0-.19-.01-.38-.02-.57l-.06-1.95c-.04-.78-.07-1.57-.1-2.35a.29.29,0,0,1,.22-.34,1.858,1.858,0,0,0,1.12-1.34,3.79,3.79,0,0,0-.73-3.37,1.861,1.861,0,0,0-.64-.48,1.158,1.158,0,0,0-1.33.23,2.872,2.872,0,0,0-.85,1.31,3.712,3.712,0,0,0-.19,2.06,2.028,2.028,0,0,0,1.26,1.64.231.231,0,0,1,.11.2c-.05,1.52-.11,3.04-.16,4.56-.01.28-.03.55-.03.82,0,.15-.05.22-.19.24a6.184,6.184,0,0,1-1.77.1c-.32-.03-.62-.09-.92-.12-.17-.02-.2-.1-.21-.25-.01-.57-.03-1.15-.06-1.73-.05-1.23-.1-2.47-.15-3.71,0-.18.05-.27.23-.31a1.174,1.174,0,0,0,.95-.91,5.519,5.519,0,0,0,.12-1.21c-.02-.9-.08-1.81-.14-2.7a.237.237,0,0,0-.07-.2.191.191,0,0,0-.18-.02.187.187,0,0,0-.08.15c-.01.19,0,.37,0,.56V8.38c0,.26-.09.41-.25.4s-.23-.15-.24-.4c-.02-1.03-.06-2.06-.1-3.08a.266.266,0,0,0-.11-.22c-.15-.06-.23.01-.24.18-.02.98-.06,1.97-.08,2.94v.26c-.02.18-.12.33-.25.32-.18-.01-.22-.15-.24-.3-.02-.08,0-.17-.02-.26-.02-.97-.05-1.94-.08-2.91,0-.1.03-.23-.14-.24-.15-.01-.22.03-.22.18-.01.33-.02.65-.03.98-.02.71-.03,1.42-.06,2.13a1.108,1.108,0,0,1-.02.19c-.03.13-.1.25-.24.22-.09-.02-.17-.14-.22-.23-.03-.05-.01-.14-.01-.22V5.31c0-.24-.03-.25-.26-.24a.121.121,0,0,0-.14.12v.03c-.06,1.09-.13,2.17-.16,3.25a1.683,1.683,0,0,0,.47,1.31,1.743,1.743,0,0,0,.61.34c.15.06.22.12.22.3-.07,1.66-.13,3.31-.19,4.97-.01.18-.04.2-.2.11a7.067,7.067,0,0,1-3.46-3.7A7.047,7.047,0,0,1,1.9,7.69,7.159,7.159,0,0,1,4.89,3.08a7.3,7.3,0,0,1,5.2-1.2,7.1,7.1,0,0,1,4.77,2.91,6.775,6.775,0,0,1,1.35,3.72,7.125,7.125,0,0,1-3.55,6.77Z"
              ></path>
            </svg>
            <span className="ps-1">202</span>
          </p>
        </div>

        <div
          className="col-7 col-sm-6 d-flex justify-content-end"
          style={{ display: 'none' }}
        ></div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Header;
