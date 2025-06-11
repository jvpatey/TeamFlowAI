import { PageBackground } from "../components/layout/PageBackground";
import { FlowingBackground } from "../components/layout/FlowingBackground";
import { Navbar } from "../components/layout/Navbar";
import { DocumentEditor } from "../components/smart-docs/editor";
import { useState } from "react";

export default function SmartDocsPage() {
  const [content, setContent] = useState(
    '<h1>Welcome to Smart Documents</h1><p>Start writing your document here or type "/" for commands...</p>'
  );

  return (
    <PageBackground className="py-0 relative overflow-hidden min-h-screen">
      {/* Dynamic Flowing Background */}
      <FlowingBackground />

      {/* Navbar inside the flowing background */}
      <Navbar />

      <div className="flex flex-col flex-1 justify-start items-center w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-text mb-4">
              Smart Documents
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Create and organize documents with AI assistance to boost your
              productivity and collaboration.
            </p>
          </div>

          {/* Document Editor */}
          <div className="max-w-4xl mx-auto">
            <DocumentEditor
              content={content}
              onUpdate={setContent}
              placeholder="Start writing your document here or type '/' for commands..."
            />
          </div>
        </div>
      </div>
    </PageBackground>
  );
}
