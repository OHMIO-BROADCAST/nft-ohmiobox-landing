import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"
import SectionTitle from "../../../../common/sectionTitle";
import TeamStyleWrapper from "./Team.style";

import avatar1 from "../../../../assets/images/team/t1.png"
import avatar2 from "../../../../assets/images/team/t2.png"
import avatar3 from "../../../../assets/images/team/t3.png"
import avatar4 from "../../../../assets/images/team/t4.png"
import avatar5 from "../../../../assets/images/team/t5.png"
import avatar6 from "../../../../assets/images/team/t6.png"
import avatar7 from "../../../../assets/images/team/t7.png"

const Team = () => {
  return (
    <TeamStyleWrapper>
      <div className="container">
        <SectionTitle
          title="TEAM MEMBERS"
          subtitle="THE CREW"
          className="section_title"
        />

        <div className="row">
          <div className="col-lg-6">
            <div className="team_member_list">
              <div className="team_member_item">
                <div className="member_avatar">
                  <img src={avatar1} alt="avatar" />
                </div>
                <div className="member_details">
                  <h6>Ricardo Jimenez <span>Founder</span></h6>
                  <div className="social_profiles">
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaInstagram /> </a>
                    <a href="#"> <FaLinkedinIn /> </a>
                  </div>
                </div>
              </div>

              <div className="team_member_item">
                <div className="member_avatar">
                  <img src={avatar3} alt="avatar" />
                </div>
                <div className="member_details">
                  <h6>Hugo Arenas <span>3D Architect</span></h6>
                  <div className="social_profiles">
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaInstagram /> </a>
                    <a href="#"> <FaLinkedinIn /> </a>
                  </div>
                </div>
              </div>

              <div className="team_member_item">
                <div className="member_avatar">
                  <img src={avatar2} alt="avatar" />
                </div>
                <div className="member_details">
                  <h6>Juan Pablo <span>Co-Founder</span></h6>
                  <div className="social_profiles">
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaInstagram /> </a>
                    <a href="#"> <FaLinkedinIn /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team_member_list">
              <div className="team_member_item">
                <div className="member_avatar">
                  <img src={avatar4} alt="avatar" />
                </div>
                <div className="member_details">
                  <h6>Sandra Lizette<span>Electronic Engineer</span></h6>
                  <div className="social_profiles">
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaInstagram /> </a>
                    <a href="#"> <FaLinkedinIn /> </a>
                  </div>
                </div>
              </div>
              <div className="team_member_item">
                <div className="member_avatar">
                  <img src={avatar5} alt="avatar" />
                </div>
                <div className="member_details">
                  <h6>Juan Diego<span>NFT Strategist</span></h6>
                  <div className="social_profiles">
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaInstagram /> </a>
                    <a href="#"> <FaLinkedinIn /> </a>
                  </div>
                </div>
              </div>
              <div className="team_member_item">
                <div className="member_avatar">
                  <img src={avatar6} alt="avatar" />
                </div>
                <div className="member_details">
                  <h6>Mauricio Henao <span>Blockchain Dev</span></h6>
                  <div className="social_profiles">
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaInstagram /> </a>
                    <a href="#"> <FaLinkedinIn /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="team_member_list">
              <div className="team_member_item team_member_item_bottom">
                <div className="member_avatar">
                  <img src={avatar7} alt="avatar" />
                </div>
                <div className="member_details">
                  <h6>Raul Gonzalez <span>UI/UX Designer</span></h6>
                  <div className="social_profiles">
                    <a href="#"> <FaTwitter /> </a>
                    <a href="#"> <FaInstagram /> </a>
                    <a href="#"> <FaLinkedinIn /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </TeamStyleWrapper>
  );
};

export default Team;
