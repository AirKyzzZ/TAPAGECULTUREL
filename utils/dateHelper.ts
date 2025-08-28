export class DateHelper {
  private static months = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  static formatFrenchDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }

  static isUpcoming(dateString: string): boolean {
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return eventDate >= today;
  }

  static isPast(dateString: string): boolean {
    return !this.isUpcoming(dateString);
  }

  static getNextEvent<T extends { date: string }>(events: T[]): T | null {
    const upcomingEvents = events
      .filter(event => this.isUpcoming(event.date))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  }
}
