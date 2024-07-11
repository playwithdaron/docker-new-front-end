import { useEffect, useState } from 'react';
import './UserData.scss';
import { useNavigate, Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiUserX } from 'react-icons/fi';
import { TbUserCheck } from 'react-icons/tb';
import Button from '../../../common/button/Button';
import FilterIcon from '../../../../assets/icons/filter-icon.png';
import axios from 'axios';

const UserData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line
  const [moreOption, setMoreOption] = useState<boolean>(false);
  const navigate = useNavigate();
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const [users, setUsers] = useState<User[]>([]);

  // get all users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://run.mocky.io/v3/97302651-da56-4b97-87c3-fa1c33eda313'
        );
        const userData = response.data.data;
        setUsers(userData);

        // Store the entire user data array in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        setLoading(false);
        console.log(users, 'resp here');
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const handleShowFilter = () => {
    setShowFilter(true);
  };

  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  });

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const filterUsers = () => {
    const filtered = users.filter((user: User) => {
      return (
        (filters.organization === '' ||
          user.organization
            .toLowerCase()
            .includes(filters.organization.toLowerCase())) &&
        (filters.username === '' ||
          user.username
            .toLowerCase()
            .includes(filters.username.toLowerCase())) &&
        (filters.email === '' ||
          user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (filters.date === '' || user.dateJoined.includes(filters.date)) &&
        (filters.phoneNumber === '' ||
          user.phoneNumber.includes(filters.phoneNumber)) &&
        (filters.status === '' ||
          user.status.toLowerCase() === filters.status.toLowerCase())
      );
    });
    setFilteredUsers(filtered);
    setShowFilter(false);
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'inactive':
        return 'status-inactive';
      case 'pending':
        return 'status-pending';
      case 'blacklisted':
        return 'status-blacklisted';
      default:
        return '';
    }
  };

  const renderTable = () => {
    const paginateUsers = (users: User[]) => {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      return users.slice(indexOfFirstItem, indexOfLastItem);
    };
    const handleRowClick = (id: number) => {
      navigate(`/dashboard/users/${encodeURIComponent(id)}`);
    };
    const handleMoreOption = (e: React.MouseEvent, id: number) => {
      e.stopPropagation();
      setOpenDropdownId(openDropdownId === id ? null : id);
    };

    if (loading) {
      return <div className='loader'></div>;
    }
    if (!loading && users?.length === 0) {
      return (
        <div className='empty_state'>
          <h2>No Data</h2>
          <p>Currently, there are no users recorded.</p>
        </div>
      );
    }

    const DropdownMenu = ({ userId }: { userId: number }) => {
      return (
        <div className='dropdown_menu'>
          <Link to={`/dashboard/users/${userId}`}>
            <span className='view'>
              <MdOutlineRemoveRedEye size={16} />
            </span>
            View Details
          </Link>
          <Link to={`#/blacklist/${userId}`}>
            <span>
              <FiUserX size={16} />
            </span>
            Blacklist User
          </Link>
          <Link to={`#/activate/${userId}`}>
            <span>
              <TbUserCheck size={16} />
            </span>
            Activate User
          </Link>
        </div>
      );
    };

    const rows = paginateUsers(filteredUsers).map((user: User) => (
      <tr key={user.id} onClick={() => handleRowClick(user.id)}>
        <td>{user.organization}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.dateJoined}</td>
        <td>
          <span className={`status ${getStatusClass(user.status)}`}>
            {user.status}
          </span>
        </td>
        <td>
          <button
            className='more_options'
            onClick={(e) => handleMoreOption(e, user.id)}>
            ⋮
          </button>
          {openDropdownId === user.id && <DropdownMenu userId={user.id} />}
        </td>
      </tr>
    ));

    const tableHead = [
      'ORGANIZATION',
      'USERNAME',
      'EMAIL',
      'PHONE NUMBER',
      'DATE JOINED',
      'STATUS',
    ];
    return (
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              {tableHead.map((th, index) => (
                <th key={index}>
                  <div className=''>
                    {th}
                    <img
                      src={FilterIcon}
                      alt='filter icon'
                      width={16}
                      height={16}
                      onClick={handleShowFilter}
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        className={currentPage === number ? 'active' : ''}
        onClick={() => number !== '...' && setCurrentPage(Number(number))}
        disabled={number === '...'}>
        {number}
      </button>
    ));
  };

  return (
    <section className='user_container'>
      <div className='wrapper'>
        {showFilter ? (
          <div className='filter_container'>
            <label htmlFor='organization'>Organization</label>
            <select
              name='organization'
              value={filters.organization}
              onChange={handleFilterChange}>
              {users.map((org, data) => (
                <option className='option' value={org.organization}>
                  {org.organization}
                </option>
              ))}
            </select>
            <label htmlFor='username'>Username</label>

            <input
              type='text'
              name='username'
              placeholder='User'
              value={filters.username}
              onChange={handleFilterChange}
            />
            <label htmlFor='email'>Email</label>

            <input
              type='text'
              name='email'
              placeholder='Email'
              value={filters.email}
              onChange={handleFilterChange}
            />
            <label htmlFor='date'>Date</label>

            <input
              type='date'
              placeholder='date'
              name='date'
              value={filters.date}
              onChange={handleFilterChange}
            />
            <label htmlFor='phoneNumber'>Phone Number</label>

            <input
              type='text'
              name='phoneNumber'
              placeholder='Phone Number'
              value={filters.phoneNumber}
              onChange={handleFilterChange}
            />
            <label htmlFor='status'>Status</label>

            <select
              name='status'
              value={filters.status}
              onChange={handleFilterChange}>
              <option value=''>Select</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
              <option value='pending'>Pending</option>
              <option value='blacklisted'>Blacklisted</option>
            </select>
            <div className='filter_btn'>
              <Button
                text='Reset'
                backgroundColor='transparent'
                textColor='#545F7D'
                border='1px solid #545F7D'
                onClick={() =>
                  setFilters({
                    organization: '',
                    username: '',
                    email: '',
                    date: '',
                    phoneNumber: '',
                    status: '',
                  })
                }
              />
              <Button
                text='Filter'
                backgroundColor='#39CDCC'
                onClick={filterUsers}
              />
            </div>
          </div>
        ) : null}

        {renderTable()}
        {moreOption && (
          <div className='dropdown_menu'>
            <a href='/'>Profile</a>
            <a href='/'>Settings</a>
            <a href='/'>Logout</a>
          </div>
        )}
      </div>
      <div className='page'>
        <div className='pagination'>
          <span>Showing</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing items per page
            }}>
            <option value='10'>10</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
            <option value='200'>200</option>
            <option value='500'>500</option>
          </select>
          <span>out of {filteredUsers.length}</span>
        </div>
        <div className='page-numbers'>
          <button
            className='prev'
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}>
            {'<'}
          </button>
          {renderPagination()}
          <button
            className='next'
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil(filteredUsers.length / itemsPerPage)
                )
              )
            }
            disabled={
              currentPage === Math.ceil(filteredUsers.length / itemsPerPage)
            }>
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserData;
