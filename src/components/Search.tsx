import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <div className="">
  <div className="subscribe-section">
    <div className="subscribe text-center">
      <h4>Subscribe To Our Newsletter</h4>
      <input type="text" className="text" defaultValue="Your email..." onFocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your email...';}" />
      <input type="submit" defaultValue="Subscribe" />
    </div>
    <div className="social-icons text-center">
      <a href="#"><i className="facebook" /></a>
      <a href="#"><i className="twitter" /></a>
      <a href="#"><i className="linkedin" /></a>
      <a href="#"><i className="pinterest" /></a>
    </div>
  </div>
</div>




    )
}

export default Search