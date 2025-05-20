import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Info, HelpCircle, MessageSquare, Github, Play } from 'lucide-react';

interface IntroPageProps {
  onComplete: () => void;
}

interface TabButtonProps {
  active: boolean;
}

interface ContentCardProps {
  wide?: boolean;
}

/**
 * Introduction page component shown to users on first visit
 */
const IntroPage: React.FC<IntroPageProps> = ({ onComplete }) => {
  const [activeSection, setActiveSection] = useState('about');

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
                alt="Great Salt Lake Dust Exposure Modeling Tool Logo" 
                className="w-full h-full object-contain rounded-md" 
              />
            </LogoContainer>
            <Title>
              <TitleAccent>Great Salt Lake</TitleAccent> Dust Exposure Modeling Tool
            </Title>
          </LogoTitle>
          
          {/* Enter Map Button */}
          <EnterButtonContainer>
            <EnterButton onClick={onComplete}>
              <MapPin size={20} className="mr-2" />
              Enter Map
            </EnterButton>
          </EnterButtonContainer>
          
          {/* Navigation Tabs */}
          <TabContainer>
            <TabWrapper>
              <TabButton 
                active={activeSection === 'about'}
                onClick={() => setActiveSection('about')}
              >
                <Info size={20} className="mr-3" />
                <span>About</span>
                {activeSection === 'about' && <TabIndicator />}
              </TabButton>
              
              <TabButton 
                active={activeSection === 'howto'}
                onClick={() => setActiveSection('howto')}
              >
                <HelpCircle size={20} className="mr-3" />
                <span>How to Use</span>
                {activeSection === 'howto' && <TabIndicator />}
              </TabButton>
              
              <TabButton 
                active={activeSection === 'feedback'}
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
            <GridLayout>
              {/* About This Tool */}
              <ContentCard>
                <SectionTitle>About This Tool</SectionTitle>
                <Divider />

              </ContentCard>
              
              {/* PM2.5 Information */}
              <ContentCard>
                <SectionTitle>Understanding PM10</SectionTitle>
                <Divider />
                
                <Paragraph>
                  PM10 refers to coarse particulate matter with a diameter of 10 micrometers or smaller.
                  These particles can settle in the bronchi and lungs, potentially causing health problems
                  particularly for people with respiratory conditions.
                </Paragraph>
                
                {/* PM10 Levels visualization */}
                <div>
                  <SectionSubtitle>PM10 Levels</SectionSubtitle>
                  
                  <ColorBarContainer>
                    <ColorBar />
                    
                    {/* Value markers and labels */}
                    <LevelLabels>
                      <LevelLabel>
                        <LevelTitle color="#00d600">Good</LevelTitle>
                        <LevelRange>0-54 μg/m³</LevelRange>
                      </LevelLabel>
                      <LevelLabel>
                        <LevelTitle color="#ffee00">Moderate</LevelTitle>
                        <LevelRange>55-154</LevelRange>
                      </LevelLabel>
                      <LevelLabel>
                        <LevelTitle color="#ff8800">USG</LevelTitle>
                        <LevelRange>155-254</LevelRange>
                      </LevelLabel>
                      <LevelLabel>
                        <LevelTitle color="#ff1a1a">Unhealthy</LevelTitle>
                        <LevelRange>255-354</LevelRange>
                      </LevelLabel>
                      <LevelLabel>
                        <LevelTitle color="#9933ff">Very Unhealthy</LevelTitle>
                        <LevelRange>355-424</LevelRange>
                      </LevelLabel>
                      <LevelLabel>
                        <LevelTitle color="#990033">Hazardous</LevelTitle>
                        <LevelRange>425+</LevelRange>
                      </LevelLabel>
                    </LevelLabels>
                  </ColorBarContainer>
                  
                  <SmallNote>
                    Note: USG stands for "Unhealthy for Sensitive Groups" - including children, older adults, and people with respiratory or heart conditions.
                  </SmallNote>
                </div>
              </ContentCard>
            </GridLayout>
          )}

          {activeSection === 'howto' && (
            <WideGrid>
              {/* Quick Start Guide */}
              <GuideCard>
                <SectionTitle>Quick Start Guide</SectionTitle>
                <Divider />
                
                <StepList>
                  <Step>
                    <StepNumber>1</StepNumber>
                    <StepContent>
                      <StepTitle>Navigate the map</StepTitle>
                      <StepDescription>Use standard zoom and pan controls located on the left side of the screen.</StepDescription>
                    </StepContent>
                  </Step>
                  
                  <Step>
                    <StepNumber>2</StepNumber>
                    <StepContent>
                      <StepTitle>Choose lake elevation</StepTitle>
                      <StepDescription>Select different GSL elevation scenarios to see how dust emissions change.</StepDescription>
                    </StepContent>
                  </Step>
                  
                  <Step>
                    <StepNumber>3</StepNumber>
                    <StepContent>
                      <StepTitle>Use timeline controls</StepTitle>
                      <StepDescription>Play through the forecast timeline or choose a specific date/time.</StepDescription>
                    </StepContent>
                  </Step>
                  
                  <Step>
                    <StepNumber>4</StepNumber>
                    <StepContent>
                      <StepTitle>View emissions levels</StepTitle>
                      <StepDescription>Mouse over colored areas to see specific PM10 concentration values.</StepDescription>
                    </StepContent>
                  </Step>
                  
                  <Step>
                    <StepNumber>5</StepNumber>
                    <StepContent>
                      <StepTitle>Toggle map layers</StepTitle>
                      <StepDescription>Use the layer control to customize your view and see different data visualizations.</StepDescription>
                    </StepContent>
                  </Step>
                </StepList>
                
                <HelpNote>
                  <HelpCircle size={24} className="mr-4 text-mahogany flex-shrink-0" />
                  <div>
                    Need more help? A detailed guided tour is available by clicking the help button in the bottom-right corner of the map interface.
                  </div>
                </HelpNote>
              </GuideCard>
              
              {/* Video Tutorial */}
              <TutorialCard>
                <TutorialHeader>
                  <h2>Video Tutorial</h2>
                </TutorialHeader>
                
                <VideoContainer>
                  {/* Play button overlay */}
                  <PlayButtonOverlay>
                    <PlayButton>
                      <Play size={40} className="ml-1" />
                    </PlayButton>
                  </PlayButtonOverlay>
                  
                  {/* Video thumbnail/placeholder */}
                  <VideoPlaceholder>
                    (Video would be embedded here)
                  </VideoPlaceholder>
                </VideoContainer>
                
                <VideoInfo>
                  <div>
                    <VideoTitle>Introduction to Great Salt Lake Dust Exposure Modeling Tool</VideoTitle>
                    <VideoDuration>Duration: 4:30</VideoDuration>
                  </div>
                </VideoInfo>
              </TutorialCard>
            </WideGrid>
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
      </ContentContainer>
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

const TabButton = styled.button<TabButtonProps>`  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  position: relative;
  background-color: ${props => props.active ? 'rgba(153, 170, 136, 0.3)' : 'transparent'};
  color: ${props => props.active ? '#2d5954' : 'rgba(45, 89, 84, 0.7)'};
  font-weight: ${props => props.active ? '600' : '400'};
  
  &:hover {
    background-color: ${props => props.active ? 'rgba(153, 170, 136, 0.3)' : 'rgba(45, 89, 84, 0.05)'};
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

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const WideGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContentCard = styled.div<ContentCardProps>`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  grid-column: ${props => props.wide ? '1 / -1' : 'auto'};
`;

const GuideCard = styled(ContentCard)``;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #2d5954;
  margin-bottom: 1.5rem;
`;

const SectionSubtitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d5954;
  margin-bottom: 1rem;
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

const StepList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Step = styled.li`
  display: flex;
  align-items: flex-start;
`;

const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #99aa88;
  color: #2d5954;
  font-weight: 700;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d5954;
  margin-bottom: 0.25rem;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #1a1a1a;
  font-family: 'Red Hat Display', sans-serif;
`;

const HelpNote = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(45, 89, 84, 0.2);
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #1a1a1a;
`;

const TutorialCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const TutorialHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #333;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #f9f6ef;
    margin: 0;
  }
`;

const VideoContainer = styled.div`
  aspect-ratio: 16 / 9;
  background-color: #222;
  position: relative;
`;

const PlayButtonOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const PlayButton = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: rgba(117, 29, 12, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #751d0c;
  }
`;

const VideoPlaceholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: 'Red Hat Display', sans-serif;
`;

const VideoInfo = styled.div`
  padding: 1.5rem;
  background-color: #222;
  border-top: 1px solid #333;
`;

const VideoTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #f9f6ef;
  margin: 0 0 0.25rem 0;
`;

const VideoDuration = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
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

export default IntroPage; 
