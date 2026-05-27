import titleImg from "../img/initial_img.jpg";

function MemberCard({ chip, name, role, desc, tag }) {
    return (
        <div className="member-card">
            <span className="member-card__chip">{chip}</span>
            <div className="member-card__title">
                <img src={titleImg} alt="이니셜 이미지" className="member-card__img" />
                <div>
                    <h3 className="member-card__name">{name}</h3>
                    <span className="member-card__role">{role}</span>
                </div>
            </div>
            <p className="member-card__content">{desc}</p>
            <div className="member-card__tag__list">
                <span className="member-card__tag">{tag[0]}</span>
                <span className="member-card__tag">{tag[1]}</span>
            </div>
        </div>
    );
}



export default MemberCard;