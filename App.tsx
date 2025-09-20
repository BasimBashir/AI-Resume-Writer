
import React, { useRef, useState } from 'react';
import Resume from './components/Resume';
import { resumeData } from './constants';
import { DownloadIcon } from './components/icons/DownloadIcon';

// To inform TypeScript about the global variables from the CDN scripts
declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
  }
}

const App: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleDownloadPdf = async () => {
    const resumeElement = resumeRef.current;
    if (!resumeElement || loading) {
      return;
    }

    setLoading(true);

    try {
      const { jsPDF } = window.jspdf;
      const canvas = await window.html2canvas(resumeElement, {
        scale: 2, // Higher scale for better resolution
        useCORS: true,
        logging: false,
        // Use the element's full scroll dimensions for accurate layout rendering
        width: resumeElement.scrollWidth,
        height: resumeElement.scrollHeight,
        windowWidth: resumeElement.scrollWidth,
        windowHeight: resumeElement.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate the height of the image in the PDF, maintaining aspect ratio
      const pdfImageHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = pdfImageHeight;
      let position = 0;

      // Add the first page
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfImageHeight);
      heightLeft -= pageHeight;

      // Add new pages if the content is longer than one page
      while (heightLeft > 0) {
        position -= pageHeight; // Shift the image up by one page height for the next page
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfImageHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Basim-Bashir-Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 font-sans py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto relative">
            <div className="flex justify-end mb-4">
                 <button
                    onClick={handleDownloadPdf}
                    disabled={loading}
                    className="bg-rose-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-rose-600 transition duration-300 ease-in-out flex items-center disabled:bg-rose-300 disabled:cursor-not-allowed"
                    aria-label="Download Resume as PDF"
                >
                    <DownloadIcon />
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                </button>
            </div>
            <div ref={resumeRef} className="w-full bg-white shadow-2xl rounded-lg overflow-hidden">
                <Resume data={resumeData} />
            </div>
        </div>
    </div>
  );
};

export default App;
