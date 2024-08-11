import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import DataProvider from "./DataProvider";
import { PageNumbers } from "@src/interface/home";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);     // State added to control the current tab/page.

  const handleTab = (pageNumber: PageNumbers) => {    // Function to change the current tab based on user interaction.
    setPage(pageNumber);
  };

  return (
    <DataProvider>        {/*to share state across different components*/}
      <Box w="100%">
        <Container maxW="1200px">
          <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
            Create Candidate Requisition
          </Heading>
          <Tabs index={page} isLazy lazyBehavior="keepMounted">     {/* Using index prop to control the active tab */}
            <TabList>
              <CustomTab>Requistion Details</CustomTab>
              <CustomTab>Job Details</CustomTab>
              <CustomTab>Interview Settings</CustomTab>
            </TabList>
            <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
              <TabPanels>
                <TabPanel>
                  <RequisitionForm handleTab={handleTab} />
                </TabPanel>
                <TabPanel>
                  <JobDetailsForm handleTab={handleTab} />
                </TabPanel>
                <TabPanel>
                  <InterviewSettingsForm handleTab={handleTab} />
                </TabPanel>
              </TabPanels>
              <DisplayCard />
            </Grid>
          </Tabs>
        </Container>
      </Box>
    </DataProvider>
  );
};

export default HomeLayout;