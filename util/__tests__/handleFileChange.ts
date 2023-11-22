// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import UploadForm from '../../app/dashboard/[userName]/UploadForm';

// describe('YourComponent', () => {
//   it('handles file change correctly', () => {
//     // Render your component
//     render(<UploadForm />);

//     // Find the file input element
//     const fileInput = screen.getByLabelText('Your file input label'); // Adjust the label as needed

//     // Create a sample file
//     const sampleFile = new File(['sample content'], 'sample.txt', {
//       type: 'text/plain',
//     });

//     // Mock the file change event
//     const changeEvent = {
//       target: {
//         files: [sampleFile],
//       },
//     };

//     // Trigger the file change event
//     userEvent.upload(fileInput, changeEvent);

//     // Now, you can assert that your component state or some side effect is correct
//     // For example, if your component has a state to track the selected file, you can assert it:
//     // const selectedFile = getYourSelectedFileState(); // Replace with the actual function to get the state
//     // expect(selectedFile).toEqual(sampleFile);
//   });
// });

import { fireEvent, render, screen } from '@testing-library/react';
import UploadForm from '../../app/dashboard/[userName]/UploadForm';

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

describe('UploadForm', () => {
  it('updates selectedFile state when a file is selected', () => {
    render(
      <UploadForm cloudName="mockCloudName" uploadPreset="mockUploadPreset" />,
    );

    // Get the file input element
    const fileInput = screen.getByLabelText(/file/i); // Assuming there is a label with the text "File" associated with the input

    // Create a mock file
    const mockFile = new File([''], 'mockFile.mp4', { type: 'video/mp4' });

    // Fire a change event with the mock file
    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    // Assert that the selectedFile state is updated
    expect(UploadForm.state.selectedFile).toEqual(mockFile);
  });
});
