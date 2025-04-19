export function calculateExperience() {
    const joiningDate = new Date('2023-12-11');
    const currentDate = new Date();

    const months = (currentDate.getFullYear() - joiningDate.getFullYear()) * 12;
    const monthDiff = months + currentDate.getMonth() - joiningDate.getMonth();
    
    const experience = monthDiff / 12;
    
    if (experience < 1) {
      return `${monthDiff} months`;
    } else if (experience < 2) {
      const years = Math.floor(experience);
      const remainingMonths = monthDiff % 12;
      return `${years}.${Math.floor(remainingMonths/12*10)} years`;
    } else {
      return `${experience.toFixed(1)} years`;
    }
  }