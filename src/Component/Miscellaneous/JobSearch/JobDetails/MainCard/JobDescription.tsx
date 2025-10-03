import { AgencyExperience, JobDescriptionHeading, Perks, Qualifications, SaveThisJob, Share } from '../../../../../utils/Constant';
import { Btn, H6, LI, P, UL } from '../../../../../AbstractElements';
import { agencyExpData, perksData, qualificationData } from '../../../../../Data/Miscellaneous/JobSearch/JobSearch';

const JobDescription = () => {
    const JobDetail = "edmin is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.";

    return (
      <>
        <div className="job-description">
          <H6>{JobDescriptionHeading}</H6>
          <P>{JobDetail}</P>
        </div>
        <div className="job-description">
          <H6>{Qualifications}</H6>
          <UL className='simple-list'>
            {qualificationData.map((data, index) => (<LI key={index}>{data}</LI>))}
          </UL>
        </div>
        <div className="job-description">
          <H6>{AgencyExperience}</H6>
          <UL className='simple-list'>
            {agencyExpData.map((data, index) => (<LI key={index}>{data}</LI>))}
          </UL>
        </div>
        <div className="job-description">
          <H6>{Perks}</H6>
          <UL className="simple-list">
            {perksData.map((data, index) => (<LI key={index}>{data}</LI>))}
          </UL>
        </div>
        <div className="job-description">
          <Btn color="primary" className="mx-1">
            <span><i className="fa fa-check"></i></span>{SaveThisJob}
          </Btn>
          <Btn color="primary">
            <span><i className="fa fa-share-alt"></i></span> {Share}
          </Btn>
        </div>
      </>
    );
}

export default JobDescription