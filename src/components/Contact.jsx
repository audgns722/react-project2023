import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__line" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className='contact__img'></div>
          <div className='contact__info'>
            <div>
              <a href="/">KAKAO : audgns722</a>
            </div>
            <div>
              <a href="https://github.com/audgns722">GITHUB : https://github.com/audgns722</a>
            </div>
            <div>
              <a href="/">E-MAIL : audgns722@naver.com</a>
            </div>
          </div>
        </div>
        <div className="contact__line bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  )
}

export default Contact