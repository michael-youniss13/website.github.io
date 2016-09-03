import React from 'react';

import ProjectTile from './ProjectTile';

export default class ProjectTileRow extends React.Component {
  render() {

    return(
      <div style={{ textAlign: 'center', verticalAlign: 'center', paddingTop: '30px' }}>
        {
          this.props.projectList.map((project) => {
            return <ProjectTile tileName={project.tileName}
                                imageURL={project.imageURL}
                                description={project.description}
                                link={project.link} />
          })
        }
      </div>
    )
  }
}


/*
<ProjectTile tileName={'Bit Coin Paper'} imageURL={'BitCoinLogo.png'}/>
<ProjectTile tileName={'Rocket Software Internship'} imageURL={'RocketSoftwareLogo.png'}/>
<ProjectTile tileName={'Pluralsight Internship'} imageURL={'PluralsightLogo.png'}/>
<ProjectTile tileName={'IBM Internship'} imageURL={'IBMLogo.png'}/>
<ProjectTile tileName={'Tetris Project'} imageURL={'TetrisLogo.png'}/>
*/

ProjectTileRow.PropTypes = {
  projectList: React.PropTypes.array
}
