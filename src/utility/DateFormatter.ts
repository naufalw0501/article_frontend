class DateFormatter{
    static formatDate = (date: Date) => {
        const year = (date.getFullYear()).toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = (date.getDate()).toString().padStart(2, '0');
  
        return `${year}-${month}-${day}`;
    }
  
    static formatDateFirstDay = (date: Date) => {
        const year = (date.getFullYear()).toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
  
        return `${year}-${month}-01`;
    }
  
    static formatDateLastDay = (date: Date) => {
        const year = parseInt((date.getFullYear()).toString());
        const month = parseInt((date.getMonth() + 1).toString().padStart(2, '0'));
        const last_day = new Date(year, month, 0 ).getDate()
        return `${year}-${month}-${last_day}`;
    }
  
    static formatMonth = (date: Date) => {
        const year = (date.getFullYear()).toString();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
  
        return `${year}-${month}`;
    }

    static formatDateTime = (date: Date | null): string => {
        if (date === null) {
            return ""; // Return empty string if date is null
        }
        
        const year: number = date.getFullYear();
        let month: number = date.getMonth() + 1;
        let day: number = date.getDate();
        const hours: number = date.getHours();
        const minutes: number = date.getMinutes();
        
        // Convert to two-digit strings
        const monthStr: string = month < 10 ? `0${month}` : `${month}`;
        const dayStr: string = day < 10 ? `0${day}` : `${day}`;
        const hoursStr: string = hours < 10 ? `0${hours}` : `${hours}`;
        const minutesStr: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
        
        return `${year}-${monthStr}-${dayStr}T${hoursStr}:${minutesStr}`;
    }
    
    
  }
  
  export default DateFormatter