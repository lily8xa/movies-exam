import avatarImg from "../../assets/img.png";
import './UserInfo.css'
export const UserInfo = () => {

    return (
        <div className={'main-user'}>
            <img className={'user-img'} src={avatarImg} alt="Avatar"/>
            <h1>Mark Robin</h1>
        </div>
    );
};
