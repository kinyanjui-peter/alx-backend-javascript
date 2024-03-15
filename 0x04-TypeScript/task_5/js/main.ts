// Define interfaces
interface MajorCredits {
    credits: number;
    brand: string;
  }
  
  interface MinorCredits {
    credits: number;
    brand: string;
  }
  
  // Define functions
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: subject1.brand 
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: subject1.brand 
    };
  }