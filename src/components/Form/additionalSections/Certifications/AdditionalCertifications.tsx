import useCustomContext from "../../../../hooks/useCustomContext";
import RichTextEditor from "../../../UI/RichTextEditor";

const AdditionalCertifications = () => {
  const maxLength = 1500;
  const { additionalSections, setAdditionalSections } = useCustomContext();
  const handleChange = (value: string) => {
    if (value.length < 1000) {
      setAdditionalSections((prev) => ({ ...prev, certifications: value }));
    }
  };

  return (
    <div className="w-full h-full fade-in">
      <RichTextEditor
        maxLength={maxLength}
        onChange={handleChange}
        initialContent={additionalSections.certifications}
      />
      <span>
        {additionalSections.certifications?.length}/{maxLength}
      </span>
    </div>
  );
};

export default AdditionalCertifications;
