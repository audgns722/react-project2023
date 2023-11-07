import React from 'react'

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">challenge <em>나의 도전</em></h2>
        <div className="skill__desc">
          <div>
            <span>1.</span>
            <h3>목표 설정</h3>
            <p>목표를 구체적 정하고 달성하고자 하는 기간과 결과를 파악합니다.</p>
          </div>
          <div>
            <div>
              <span>2.</span>
              <h3>자기모니터링</h3>
              <p>목표를 추적하고 진행 상황을 모니터링하는 방법을 설정합니다.</p>
            </div>
            <div>
              <span>3.</span>
              <h3>지속적인 학습</h3>
              <p>목표를 향해 나아가면서 계속해서 새로운 지식을 습득하고 개인 발전을 위해 노력합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill