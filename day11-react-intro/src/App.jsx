import MemberCard from "./components/MemberCard";
import "./App.css";

function App() {
  return (
    <main id="page">
      <section className="hero-section">
        <div className="title-box">
          <h1 className="title-box__title">멤버 카드 구현 테스트</h1>
          <p className="title-box__sub">카드 구현 테스트 참가자 명단입니다.</p>
        </div>

        <div className="card-list">
          <MemberCard name="김태호" role="부장" chip="1" desc="test 1" tag={["tag", "hash"]}></MemberCard>
          <MemberCard name="박지연" role="차장" chip="2" desc="test 2" tag={["tag", "hash"]}></MemberCard>
          <MemberCard name="김재희" role="팀장" chip="3" desc="test 3" tag={["tag", "hash"]}></MemberCard>
        </div>
      </section>
    </main>
  );
}

export default App;