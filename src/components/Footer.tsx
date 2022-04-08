import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
                  <div className="up-arrow">
                    <a className="scroll" href="#home"><img src="images/up.png"  /></a>
                  </div>
                  <div className="container">
                    <div className="copyrights">
                      <p>tuandtph13846@gmail.com | dothanhtuana6ntt2020@gmail.com | 0702022234  <a href="">  </a></p>
                    </div>
                    <div className="footer-social-icons">
                      <a href="#"><i className="fb" /></a>
                      <a href="#"><i className="tw" /></a>
                      <a href="#"><i className="in" /></a>
                      <a href="#"><i className="pt" /></a>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
  )
}

export default Footer