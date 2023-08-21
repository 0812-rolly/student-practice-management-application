import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tabs from 'components/units/Tabs/Tabs';
import {
  IconMail, IconPhone, IconSkype, IconTelegram, Pencil,
} from 'components/units/Icons/Icons';
import EducationTab from './ProfileTabs/EducationTab/EducationTab';
import GoalsTab from './ProfileTabs/GoalsTab/GoalsTab';
import PracticeTab from './ProfileTabs/PracticeTab/PracticeTab';
import SurveyTab from './ProfileTabs/SurveyTab/SurveyTab';
import SvgIcon from '../Home/HomeBlocks/PracticeAreas/AreasItems/SvgIcon/SvgIcon';
import './Profile.scss';

function Profile() {
  const users = [
    {
      id: 4,
      name: 'Ivanov Ivan Ivanovich',
      role: 'STUDENT',
      phoneNumber: '+78005553535',
      skype: 'vanyaSkype',
      email: 'ivan@gmail.com',
      photo: 'https://hollywoodhairdesignii.files.wordpress.com/2014/10/bigstock-portrait-of-happy-young-man-is-46869517qr-code-scholarship.jpg',
    },
    {
      id: 1,
      name: 'Vasyliyeva Vasilisa Vasiliyevna',
      role: 'MENTOR',
      phoneNumber: '81234567890',
      telegram: 'vasyaTelegram',
      email: 'vasya@gmail.com',
      photo: 'https://sun9-12.userapi.com/c841526/v841526825/18973/wySRiEZRYgw.jpg',
    },
  ];

  const { profileId } = useParams();
  const personalProfileId = useSelector((state) => state.user.idProfile);
  const id = Number(profileId) || Number(personalProfileId);
  const user = users.find((item) => item.id === id);
  const handlerEditClick = () => {
    console.log('click edit');
  };

  const tabItems = [
    { id: 1, title: 'Education', content: <EducationTab /> },
    { id: 2, title: 'Practice', content: <PracticeTab /> },
    { id: 3, title: 'Goals', content: <GoalsTab /> },
    { id: 4, title: 'Survey', content: <SurveyTab /> },
  ];
  return (
    <div className="profile">
      <div className="profile__wrap-image">
        <img className="profile__image" alt="User" src={user.photo} />
      </div>

      <div className="profile__user-info user-info">
        <div className="user-info__item user-info__item_name item">
          <div className="item__wrapper-name">
            <span className="item__name">{user.name}</span>
            <span className="item__role">{user.role}</span>
          </div>
          <SvgIcon
            className="item__icon item__icon_edit"
            width={16}
            height={16}
            iconOptions={Pencil.lines}
            viewBox={Pencil.viewBox}
            onClick={handlerEditClick}
          />
        </div>
        <div className="user-info__item item">
          <SvgIcon
            className="item__icon item__icon_phone"
            width={16}
            height={16}
            iconOptions={IconPhone.lines}
            viewBox={IconPhone.viewBox}
          />
          <span className="item__phone">{user.phoneNumber}</span>
        </div>
        <div className="user-info__item item">
          <SvgIcon
            className="item__icon item__icon_mail"
            width={16}
            height={16}
            iconOptions={IconMail.lines}
            viewBox={IconMail.viewBox}
          />
          <span className="item__phone">{user.email}</span>
        </div>
        {user.skype && (
          <div className="user-info__item item">
            <SvgIcon
              className="item__icon item__icon_skype"
              width={16}
              height={16}
              iconOptions={IconSkype.lines}
              viewBox={IconSkype.viewBox}
            />
            <span className="item__skype">{user.skype}</span>
          </div>
        )}
        {user.telegram && (
          <div className="user-info__item item">
            <SvgIcon
              className="item__icon item__icon_telegram"
              width={16}
              height={16}
              iconOptions={IconTelegram.lines}
              viewBox={IconTelegram.viewBox}
            />
            <span className="item__telegram">{user.telegram}</span>
          </div>
        )}
      </div>
      <Tabs tabItems={tabItems} />
    </div>
  );
}

export default Profile;
