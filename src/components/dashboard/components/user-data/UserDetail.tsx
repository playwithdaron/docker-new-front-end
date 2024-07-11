import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UserData.scss';
import '../../../common/layout/Layout.scss';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import Button from '../../../common/button/Button';
import StarIcon from '../../../../assets/icons/star-icon.png'

const UserDetail = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/dashboard/users');
  };

  const [user, setUser] = useState<User | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
   const userData = localStorage.getItem('userData');
   if (userData) {
     const users: User[] = JSON.parse(userData);
     const selectedUser = users.find((user) => user.id === Number(id));
     if (selectedUser) {
       setUser(selectedUser);
     } else {
       console.error('User not found');
     }
   } else {
     console.error('No user data found in localStorage');
   }
 }, [id]);


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className='main'>
      <section className='user_container'>
        <div className='user_wrapper'>
          <div className='user_action'>
            <div className='arrow_back' onClick={handleBackClick}>
              <HiOutlineArrowNarrowLeft color='#545F7D' size={26} />
              <span>Back to Users</span>
            </div>
            <div className='user_details'>
              <p>User Details</p>
              <div className='action_btn'>
                <Button
                  text='BLACKLIST USER'
                  borderColor='#E4033B'
                  fontSize='14px'
                  padding='12px 16px'
                  border='1px solid'
                  backgroundColor='transparent'
                  textColor='red'
                  borderRadius={8}
                />
                <Button
                  text='ACTIVATE USER'
                  borderColor='green'
                  textColor='#39CDCC'
                  fontSize='14px'
                  fontWeight='600'
                  borderRadius={8}
                  padding='12px 22px'
                  border='1px solid'
                  backgroundColor='transparent'
                />
              </div>
            </div>
          </div>
          <div className='profile'>
            <div className='profile_wrapper'>
              <div className='profile_icon'>
                <p>
                  <AiOutlineUser size={29} />
                </p>
              </div>
              <div className='user_name'>
                <p>{user.personalInfo.fullName}</p>
                <p>LSQFf587g90</p>
              </div>
              <div className='border_line'></div>
              <div className='user_tier'>
                <p>User’s Tier</p>
                <img src={StarIcon} alt='start icon' />
              </div>
              <div className='border_line'></div>

              <div className='user_balance'>
                <p>{user.educationAndEmployment.monthlyIncome[0]}</p>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>

            <div className='user_tab'>
              <div className='active'>
                <p>General Details</p>
              </div>
              <div>
                <p>Documents</p>
              </div>
              <div>
                <p>Bank Details</p>
              </div>
              <div>
                <p>Loans</p>
              </div>
              <div>
                <p>Savings</p>
              </div>
              <div>
                <p>App and System</p>
              </div>
            </div>
          </div>
          <div className='user_info'>
            <div>
              <p>Personal Information</p>
              <div className='personal'>
                {Object.entries(user.personalInfo).map(([key, value]) => (
                  <div key={key}>
                    <p className='tag'>{key.toUpperCase()}</p>
                    <span className='label'>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr />
            <div>
              <p>Education and Employment</p>
              <div className='edu'>
                {Object.entries(user.educationAndEmployment).map(
                  ([key, value]) => (
                    <div key={key}>
                      <p className='tag'>{key.toUpperCase()}</p>
                      <span className='label'>
                        {Array.isArray(value) ? value.join(' - ') : value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <hr />
            <div>
              <p>Socials</p>
              <div className='social'>
                {Object.entries(user.socials).map(([key, value]) => (
                  <div key={key}>
                    <p className='tag'>{key.toUpperCase()}</p>
                    <span className='label'>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <hr />

            <div>
              <p>Guarantor</p>
              <div className='guarantor'>
                {Object.entries(user.guarantor).map(([key, value]) => (
                  <div key={key}>
                    <p className='tag'>{key.toUpperCase()}</p>
                    <span className='label'>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserDetail;
