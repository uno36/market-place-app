import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

interface UserConnectProps {
  data: {
    title: string;
    text: string;
    btn: string;
    profileimg: string;
    artist: string;
    artistname: string;
  };
}

const UserConnect: React.FC<UserConnectProps> = ({data}) => {
  return (
    <div className='d-flex'>
      <Card className="user-card">
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.text}
          </Card.Subtitle>
          <div className=" user-div d-flex">
            <img src={data.profileimg} alt="profile" />
            <div className="user">
              <span className="profile-span">{data.artist}</span>
              <br />
              {data.artistname}
            </div>
          </div>

          <div className="link-div">
            <Link to="/Account" className="links">
              {data.btn}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

UserConnect.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    profileimg: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    artistname: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserConnect
