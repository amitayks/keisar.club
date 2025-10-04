# Visara - Native AI Gallery Application Manifest

## Executive Summary

Visara is an intelligent photo gallery application that revolutionizes how users interact with their device's image library through AI-powered search and organization capabilities. The application leverages on-device machine learning to automatically process, categorize, and make searchable all images and PDF documents stored on the user's device, providing a seamless and privacy-focused experience with native performance.

## Core Value Proposition

Unlike traditional gallery applications that rely on manual organization or basic metadata, Visara employs advanced image labeling and optical character recognition (OCR) to understand the actual content within images and documents. This enables users to search their entire photo library using natural language queries, finding specific images based on what's actually in them—whether it's objects, text, scenes, or documents—all while maintaining complete privacy through local processing.

## Application Architecture Overview

### 1. Initial User Experience & Onboarding

#### Welcome Screen Flow
The application begins with a carefully crafted onboarding experience consisting of four horizontal swipeable screens:

1. **Welcome & Introduction Screen**: Presents the Visara logo with a brief, engaging introduction to the app's core purpose—intelligent photo organization powered by AI
2. **Privacy First Screen**: Emphasizes the application's commitment to privacy, explaining that all processing happens locally on the device without any cloud uploads
3. **Local Processing Screen**: Details how the AI models work directly on the device, ensuring fast performance and complete data privacy
4. **Permission Request Screen**: Requests necessary storage permissions with clear explanation of why access is needed, including a prominent grant permission button

The onboarding screens feature smooth horizontal swipe navigation with visual indicators showing current position. Each screen includes animated icons that complement the content and enhance user engagement.

### 2. Main Application Interface

#### Primary Gallery View
Upon successful onboarding, users are directed to the main screen, which becomes the default entry point for all subsequent app launches.

**Header Section**:
- **Left side**: Visara application logo
- **Right side**: Plus (+) icon for manual file upload functionality

**Progress Indicator** (Conditional):
- Appears below the header when background processing is active
- Displays a smooth progress bar showing real-time processing status
- Includes text indicating number of files processed vs. total files found

**Content Area - Timeline View**:
The main content area presents all discovered media files in a chronological timeline structure:

- **Date-based Grouping**: Files are organized into collapsible sections by date
  - Default view groups by day (e.g., "Today", "Yesterday", "October 15, 2024")
  - Each date group displays as a section header with the number of items

- **Thumbnail Grid**:
  - Images display as square thumbnails with consistent aspect ratios
  - PDF files show the first page as a thumbnail
  - Unprocessed files display a subtle overlay icon indicating pending analysis
  - Smooth loading animations as thumbnails come into view

- **Zoom Functionality**:
  - Pinch-to-zoom gesture support for thumbnail size adjustment
  - Three zoom levels:
    - Compact: 4 columns of small thumbnails
    - Default: 3 columns of medium thumbnails
    - Large: 2 columns of large thumbnails
  - Zoom level persists across sessions

- **Infinite Scroll**:
  - Implements virtualized list rendering for optimal performance
  - Loads content in pages as user scrolls
  - Smooth scroll performance even with thousands of items
  - Shows loading indicator when fetching additional pages

**Bottom Navigation Container**:
A floating container positioned at the bottom of the screen (marginBottom: 10px) containing four primary action buttons:

1. **Search Icon**: Triggers search interface
2. **Document Icon**: Filters view to show only document-type files
3. **Album Icon**: Switches to album organization view
4. **Settings Icon**: Opens settings drawer

The container features subtle elevation/shadow for visual hierarchy and smooth transition animations when switching between modes.

### 3. File Interaction System

#### File Modal Presentation
When a user taps on any file in the grid, an immersive modal experience is triggered:

**Modal Structure**:
- **Backdrop**: Semi-transparent overlay that dims the main content
- **Image Display**: 
  - Expands to 90% of screen dimensions
  - Maintains original aspect ratio with letterboxing if needed
  - For PDFs, displays the first page with a page indicator

**Interactive Features**:
- **Horizontal Navigation**:
  - Swipe left/right to navigate to previous/next files in the current list context
  - Smooth page transition animations
  - Edge bounce effects at list boundaries

- **Zoom Capabilities**:
  - Double-tap to zoom to 2x magnification at tap point
  - Pinch gesture for precise zoom control (1x to 4x range)
  - Pan gesture when zoomed in
  - Double-tap when zoomed returns to fit view

- **Gesture Controls**:
  - Swipe up: Opens information drawer
  - Swipe down: Closes modal with spring animation
  - Tap backdrop: Also closes modal

#### Information Drawer
A bottom sheet component that provides detailed file information and actions:

**Action Bar**:
- **Delete**: Two-tier deletion option
  - Permanent deletion from device storage
  - Remove only from app database
- **Share**: System share sheet with processed metadata attached
- **Copy**: Copies extracted text/labels to clipboard
- **Open**: Opens file in default system app
- **Star**: Add to album with selection drawer

**Information Display** (Scrollable content):
- **Labels Section**: 
  - Displays AI-identified objects/scenes with confidence scores
  - Tags are tappable to search for similar images
  
- **Text Section** (if applicable):
  - Shows OCR-extracted text in readable format
  - Includes copy button for text selection

**Drawer Behavior**:
- Draggable handle at top for manual control
- Three snap points: closed, half-open, fully expanded
- Content updates immediately when swiping between files
- Prefetches adjacent file information for instant display

### 4. Search Functionality

#### Search Interface Transformation
When the search icon is tapped, the bottom navigation container smoothly morphs into a search bar through a fluid animation:

**Search Bar Components** (left to right):
1. **Close Button (×)**: Dismisses search and returns to normal view
2. **Search Input Field**: 
   - Placeholder: "Search your photos..."
   - Auto-focus with keyboard appearance
   - Clear button appears when text is entered
3. **Search Icon**: Executes search query

**Search Results Presentation**:
- Results appear instead of the main list, until changed or dismmised
- Displays matched files in a grid similar to main view
- Shows result count in the search bar
- Maintains search context when viewing individual files
- Search persists until explicitly cleared or dismissed

### 5. Document View Mode

When the document icon is selected, the main list transforms to show only files identified as documents:
- Screenshots with text content
- Scanned documents
- PDFs
- Images of papers, receipts, forms, etc.
- Maintains all standard list functionalities (zoom, selection, modal viewing)
- Quick toggle back to all files view

### 6. Album Organization System

#### Album View Interface
Selecting the album icon transforms the main view to display album collections:

**Album Grid**:
- Larger thumbnail cards compared to individual files
- Each album shows:
  - Cover image (intelligent selection of representative image)
  - Album name
  - Item count
  - Last modified date

**Album Interaction**:
- Tap to open album contents in a drawer
- Album contents display uses the same grid layout as main view
- Full modal viewing capabilities within album context
- Drag and drop to reorganize albums (long press to initiate)

**Automatic Album Creation**:
The app intelligently creates albums based on content analysis:
- Receipts & Bills
- Screenshots
- Documents
- ID Cards & Official Documents
- Handwritten Notes
- And other categories based on detected patterns

### 7. Manual Upload Functionality

#### Upload Drawer Interface
Triggered by tapping the plus (+) icon in the header:

**Upload Options**:
1. **Storage Selection**: 
   - Opens system file picker
   - Supports multi-file selection
   - Shows selected file preview

2. **Camera Capture**:
   - Direct camera interface
   - Capture new photo/document
   - Basic crop/rotate tools before processing

**Processing Feedback**:
- Shows processing overlay with circular progress
- Displays thumbnail of file being processed
- Success animation when complete
- Automatically adds to top of main list with highlight animation

### 8. Settings Management

#### Settings Drawer
A full-height drawer that slides from the bottom with the following sections:

**Processing Settings**:
- **Battery Saver Mode** (Toggle): Process files only when connected to charger
- **Night Processing** (Toggle): Limit processing to night hours (00:00 - 06:00)

**Appearance Settings**:
- **Theme** (Toggle): Dark/Light mode with system default option

**Data Management**:
- **Clear Cache** (Button): Removes temporary files and thumbnails
- **Delete All Data** (Button): Complete app reset with confirmation dialog

**Legal & Information** (Collapsible Section):
- Privacy Policy (Link)
- Terms of Service (Link)
- App Version Information
- Open Source Licenses

### 9. Background Processing Pipeline

#### Intelligent File Processing System

**Discovery Phase**:
1. Scans device storage for all image formats (JPEG, PNG, HEIF, WebP, etc.)
2. Identifies PDF documents
3. Registers files in database with unique identifiers from MediaStore _ID / localIdentifier
4. Immediately displays in UI with "processing pending" indicator

**Processing Pipeline** (Per File):

1. **Image Labeling**:
   - Utilizes Google ML Kit's on-device image labeling
   - Identifies objects, scenes, and concepts
   - Generates confidence scores for each label
   - Output: JSON array with labels and confidence scores

2. **Text Recognition** (Conditional):
   - Triggered for documents, screenshots, or images with text indicators (comes from imageLabling)
   - Employs Google ML Kit's OCR capabilities
   - Extracts text with positional information
   - Structures output with text blocks and formatting

3. **Data Persistence**:
   - Stores processed data in WatermelonDB
   - Maintains relationships between files and extracted metadata
   - Enables offline-first architecture with sync capabilities

4. **Search Index Generation**:
   - Builds MiniSearch index from processed data
   - Serializes index to JSON for fast loading
   - Caches in MMKV for instant app startup
   - Updates incrementally as new files are processed

**Performance Optimization**:
- single images processing
- Memory monitoring to prevent overflow
- Automatic cleanup of temporary processing files after every image
- Resume capability after app termination
- smart Pause/Resume functionality based on device condition (based on the settings, if the app chargeing or its night time)

**Progress Tracking**:
- Persistent notification showing processing status
- In-app progress bar with current file indication
- Estimated time remaining calculation

### 10. Notification System

**Processing Notifications**:
- Initial notification 5 minutes after first launch
- Persistent notification during active processing
- Completion notification with summary statistics
- Error notifications for processing failures

## Technical Implementation

### Core Technologies

**Framework & Runtime**:
- **React Native 0.81.4** - New Architecture enabled
- **React 19.1.0** - Latest React features and concurrent rendering
- **TypeScript** - Type-safe development

**UI Component Library**:
- **React Native Paper** - Material Design components

**Navigation & Gestures**:
- **React Navigation v6** - Screen navigation and deep linking
- **React Native Gesture Handler** - Native gesture recognition
- **React Native Reanimated 3** - High-performance animations

**Data Storage & Management**:
- **WatermelonDB** - SQLite-based reactive database
- **React Native MMKV** - Ultra-fast key-value storage
- **MiniSearch** - Client-side full-text search engine

**Machine Learning & Processing**:
- **@react-native-ml-kit/image-labeling** - On-device image analysis
- **@react-native-ml-kit/text-recognition** - OCR capabilities

**Media Handling**:
- **@react-native-camera-roll/camera-roll** - Gallery access
- **React Native Vision Camera** - Camera functionality
- **React Native Image Picker** - File selection

**Performance & Optimization**:
- **@shopify/flash-list v2** - Virtualized lists for large datasets
- **React Native Fast Image** - Optimized image loading and caching

**Background Processing**:
- **React Native Background Actions** - Long-running background tasks
- **Notifee** - Advanced notification management
- **React Native Device Info** - Device capabilities detection

**Development Tools**:
- **Flipper** - Debugging and profiling
- **React Native Config** - Environment configuration

### Architecture Patterns

**State Management**: Context API with useReducer for complex state
**Data Flow**: Unidirectional data flow with clear separation of concerns
**Component Structure**: Atomic design principles with reusable components
**Performance**: Lazy loading, memoization, and virtualization throughout
**Error Handling**: Comprehensive error boundaries and fallback UI
**Testing**: Jest for unit tests, Detox for E2E testing
