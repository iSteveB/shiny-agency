import Card from '../../components/Cards';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useEffect, useState } from 'react';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  width: 90%;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
  {
    name: 'Sarah Croche',
    jobTitle: 'Développeuse Backend',
  },
]

function Freelances() {

  const [freelancesList, setFreelancesList] = useState([])

    useEffect(()=> {
      fetch('http://localhost:8000/freelances')
      .then((response) => response.json()
      .then((response) => setFreelancesList(response.freelancersList))
      .catch((err)=> console.log(err))
      )}, [])
      

      console.log(freelancesList);
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {freelancesList.map((profile, id) => (
          <Card
            key={id}
            label={profile.job}
            title={profile.name}
            picture={profile.picture}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances;