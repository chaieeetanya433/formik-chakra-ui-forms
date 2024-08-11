# Candidate Requisition Management System

## Overview

The Candidate Requisition Management System is a web application designed to streamline the process of creating and managing candidate requisitions. It offers a user-friendly interface with tabs to manage different aspects of the requisition process, including job details, requisition details, and interview settings.

## Features

- **Tabbed Navigation**: Seamless navigation between Requisition Details, Job Details, and Interview Settings using Chakra UI tabs.
- **Responsive Layout**: A responsive grid layout to ensure optimal viewing on various devices.
- **Dynamic Forms**: Forms for entering and managing requisition, job, and interview details.
- **Preview Card**: A display card that shows a preview of the entered information.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: A modular and accessible component library for React that provides building blocks for creating React applications.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and maintainability.
- **Grid Layout**: Utilizes CSS Grid for flexible and responsive layouts.

## Components

- **`CustomTab`**: A styled tab component for navigation.
- **`DataProvider`**: A provider component to share state or context across the application.
- **`InterviewSettingsForm`**: Form for configuring interview settings.
- **`JobDetailsForm`**: Form for entering job details.
- **`RequisitionForm`**: Form for entering requisition details.
- **`DisplayCard`**: A card component that displays a preview of the entered information.

## Directory Structure

src/
components/
CustomTab.tsx # Custom tab component for navigation
HomeLayout.tsx # Main component with tab navigation
InterviewSettingsForm.tsx # Form for interview settings
JobDetailsForm.tsx # Form for job details
RequisitionForm.tsx # Form for requisition details
DisplayCard.tsx # Component to display a preview card
DataProvider.tsx # Provider component for state management
interfaces/
home.ts # Type definitions for page numbers and other interfaces
theme/
theme.ts # Custom theme configurations for Chakra UI