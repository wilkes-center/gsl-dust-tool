import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Info, MessageSquare, Github, Play, X } from 'lucide-react';
import PMValue from './common/PMValue';

interface IntroPageProps {
  onComplete: () => void;
}

interface TabButtonProps {
  $active: boolean;
}

interface ContentCardProps {
  wide?: boolean;
}

/**
 * Introduction page component shown to users on first visit
 */
const IntroPage: React.FC<IntroPageProps> = ({ onComplete }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [showDemo, setShowDemo] = useState(false);

  return (
    <IntroContainer>
      {/* Background gradient accents */}
      <GradientBackground>
        <GradientTopLeft />
        <GradientBottomRight />
      </GradientBackground>
      
      {/* Main container */}
      <ContentContainer>
        {/* Header with title and tabs */}
        <Header>
          <LogoTitle>
            <LogoContainer>
              <img 
                src="/gsl-dust-tool/logo192.png" 
                alt="Great Salt Lake Basin Dust Exposure Modeling Tool Logo" 
                className="w-full h-full object-contain rounded-md" 
              />
            </LogoContainer>
            <Title>
              <TitleAccent>Great Salt Lake Basin</TitleAccent> Dust Exposure Modeling Tool
            </Title>
          </LogoTitle>
          
          {/* Action Buttons */}
          <EnterButtonContainer>
            <EnterButton onClick={onComplete}>
              <MapPin size={20} className="mr-2" />
              Enter Map
            </EnterButton>
            <DemoButton onClick={() => setShowDemo(true)}>
              <Play size={20} className="mr-2" />
              Interactive Demo
            </DemoButton>
          </EnterButtonContainer>
          
          {/* Navigation Tabs */}
          <TabContainer>
            <TabWrapper>
              <TabButton 
                $active={activeSection === 'about'}
                onClick={() => setActiveSection('about')}
              >
                <Info size={20} className="mr-3" />
                <span>About</span>
                {activeSection === 'about' && <TabIndicator />}
              </TabButton>
              
              <TabButton 
                $active={activeSection === 'feedback'}
                onClick={() => setActiveSection('feedback')}
              >
                <MessageSquare size={20} className="mr-3" />
                <span>Feedback</span>
                {activeSection === 'feedback' && <TabIndicator />}
              </TabButton>
            </TabWrapper>
          </TabContainer>
        </Header>
        
        {/* Content container */}
        <Content>
          {activeSection === 'about' && (
            <CenteredContainer>
              {/* About This Tool */}
              <ContentCard>
                <SectionTitle>About This Tool</SectionTitle>
                <Divider />
                



                <Paragraph style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
                  This tool synthesizes output from the following data sources: the HYSPLIT-STILT atmospheric transport model (Lin et al. 2003; Loughner et al. 2021), a modified version of the FENGSHA dust emission model (Mallia et al. 2017), and Great Salt Lake (GSL) field measurements collected by Kevin Perry. GSL bathymetry data is used to estimate exposed lakebed areas for lake level scenarios. Using this information, this tool estimates dust exposure for different census tracts across northern Utah corresponding to different Great Salt Lake water levels. We gratefully acknowledge funding from the Utah Department of Air Quality and Division of Natural Resources, and the Wilkes Center for Climate Science and Policy for supporting the development of the GSL dust exposure tool. 
                </Paragraph>

                <Paragraph style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
                  DISCLAIMER: Output from computer models are subject to uncertainties.  The Wilkes Center and the University of Utah provide this output "as is", and the user is solely responsible for its use.
                </Paragraph>
                
                <SectionSubtitle>References:</SectionSubtitle>

                <Paragraph style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Lin, J.C., C. Gerbig, S.C. Wofsy, et al., A near-field tool for simulating the upstream influence of atmospheric observations (2003), The Stochastic Time-Inverted Lagrangian Transport (STILT) model. J. Geophy. Res., 108(D16), 4493.
                </Paragraph>

                <Paragraph style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Loughner, C., B. Fasoli, A.F. Stein, and J.C. Lin (2021), Incorporating features from the Stochastic Time-Inverted Lagrangian Transport (STILT) model into the Hybrid Single-Particle Lagrangian Integrated Trajectory (HYSPLIT) model: a unified dispersion model for time-forward and time-reversed applications. J. Applied Meteorology and Climatology, 60, 799-810.
                </Paragraph>

                <Paragraph style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Mallia, D.V., A. Kochanski, D. Wu, C. Pennell, W. Oswald, and J.C. Lin (2017), Wind-blown dust modeling using a backward Lagrangian particle dispersion model. J. Applied Meteorology and Climatology, 56, 2845-2867.
                </Paragraph>

              </ContentCard>
            </CenteredContainer>
          )}

          {activeSection === 'feedback' && (
            <ContentCard wide>
              <SectionTitle>Submit Feedback</SectionTitle>
              <Divider />
              
              <FeedbackContainer>
                <FeedbackHeader>
                  <Github size={24} className="mr-3" />
                  <FeedbackTitle>GitHub Issues</FeedbackTitle>
                </FeedbackHeader>
                
                <Paragraph>
                  For bug reports, feature requests, and technical feedback, please submit a GitHub issue. This helps us track and address your concerns effectively.
                </Paragraph>
                
                <GithubLink>
                  <RepoUrl>
                    github.com/wilkes-center/gsl-dust-tool/issues
                  </RepoUrl>
                  <SubmitButton 
                    href="https://github.com/wilkes-center/gsl-dust-tool/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Submit Issue
                  </SubmitButton>
                </GithubLink>
              </FeedbackContainer>
            </ContentCard>
          )}
        </Content>
        
        {/* Footer */}
        <Footer>
          Wilkes Center for Climate Science and Policy
        </Footer>
      </ContentContainer>

      {/* Demo Modal */}
      {showDemo && (
        <DemoModal>
          <DemoOverlay onClick={() => setShowDemo(false)} />
          <DemoContent>
            <DemoIframeContainer>
              <FloatingCloseButton onClick={() => setShowDemo(false)}>
                <X size={32} />
              </FloatingCloseButton>
              <iframe 
                src="https://storymaps.arcgis.com/stories/8e1c5b2194184d54b89662719439dddd" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen 
                allow="geolocation"
                title="Great Salt Lake Crisis Interactive Demo"
              />
            </DemoIframeContainer>
          </DemoContent>
        </DemoModal>
      )}
    </IntroContainer>
  );
};

// Styled Components
const IntroContainer = styled.div`
  position: fixed;
  inset: 0;
  font-family: 'Sora', sans-serif;
  background-color: #f9f6ef;
  z-index: 1000;
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const GradientTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 33%;
  height: 33%;
  background-color: rgba(153, 170, 136, 0.1);
  border-radius: 50%;
  filter: blur(100px);
  transform: translate(-50%, -50%);
`;

const GradientBottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-color: rgba(45, 89, 84, 0.05);
  border-radius: 50%;
  filter: blur(100px);
  transform: translate(25%, 25%);
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LogoContainer = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleAccent = styled.span`
  color: #751d0c;
`;

const EnterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const EnterButton = styled.button`
  background-color: #751d0c;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0.75rem 2.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #8b2113;
    transform: scale(1.05);
  }
`;

const DemoButton = styled(EnterButton)`
  background-color: #2d5954;
  margin-left: 1rem;
  
  &:hover {
    background-color: #1e3d3a;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const TabWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TabButton = styled.button<TabButtonProps>`  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.$active ? 'rgba(153, 170, 136, 0.3)' : 'transparent'};
  color: ${props => props.$active ? '#2d5954' : 'rgba(45, 89, 84, 0.7)'};
  font-weight: ${props => props.$active ? '600' : '400'};
  font-size: 1.125rem;
  
  &:hover {
    background-color: ${props => props.$active ? 'rgba(153, 170, 136, 0.3)' : 'rgba(45, 89, 84, 0.05)'};
  }
`;

const TabIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #751d0c;
  border-radius: 0 0 4px 4px;
`;

const Content = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

const ContentCard = styled.div<ContentCardProps>`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  grid-column: ${props => props.wide ? '1 / -1' : 'auto'};
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #2d5954;
  margin-bottom: 1.5rem;
`;

const SectionSubtitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
  color: #1a1a1a;
  font-family: 'Red Hat Display', sans-serif;
`;

const Divider = styled.div`
  height: 3px;
  width: 5rem;
  background-color: #751d0c;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-family: 'Red Hat Display', sans-serif;
`;

const ColorBarContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem 0;
`;

const ColorBar = styled.div`
  height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background: linear-gradient(to right, #00d600, #ffee00, #ff8800, #ff1a1a, #9933ff, #990033);
`;

const LevelLabels = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 0.75rem;
`;

const LevelLabel = styled.div`
  text-align: center;
`;

interface LevelTitleProps {
  color: string;
}

const LevelTitle = styled.div<LevelTitleProps>`
  font-weight: 600;
  color: ${props => props.color};
`;

const LevelRange = styled.div`
  color: #1a1a1a;
`;

const SmallNote = styled.div`
  font-size: 0.75rem;
  color: #666;
  font-style: italic;
  margin-top: 1rem;
`;

const FeedbackContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #2d5954;
`;

const FeedbackTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`;

const GithubLink = styled.div`
  background-color: #f9f6ef;
  border: 1px solid rgba(153, 170, 136, 0.5);
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const RepoUrl = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #1a1a1a;
  font-family: 'Red Hat Display', sans-serif;
`;

const SubmitButton = styled.a`
  padding: 0.5rem 1.25rem;
  background-color: #2d5954;
  color: #f9f6ef;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: #1e3d3a;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-top: 2rem;
  
  ${ContentCard} {
    max-width: 900px;
    width: 100%;
  }
`;

const DemoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const DemoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const DemoContent = styled.div`
  position: relative;
  z-index: 1002;
  background-color: #f9f6ef;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 95%;
  max-width: 1400px;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DemoIframeContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
`;

const FloatingCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #751d0c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1003;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;

  &:hover {
    background-color: #8b2113;
  }
`;

const Footer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 1rem 2rem;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: auto;
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-right: -2rem;
  margin-bottom: -2rem;
`;

export default IntroPage; 
