import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <div className="">
  <div className="subscribe-section">
    <div className="subscribe text-center">
      <h4>Nhập thứ bạn tìm kiếm</h4>
      <input type="text" className="text" placeholder='Mời nhập'  />
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