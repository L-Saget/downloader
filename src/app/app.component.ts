import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'downloader';
  movie = 'Chicken Run';

  launch(): void {
    console.log(this.movie);
    const movie = this.movie.split(' ').join('+');
    const search = 'https://www.google.com/search?rlz=1C1GCEA_enFR901FR901&sxsrf=ALeKk00X8nLggo9BiHq074L1-V1m6BrgHA%3A1608572876415&ei=zN_gX-XlGOKUlwTWg7m4CA&q=intitle%3A%22index.of%22+%28MP4%29+%22' + movie.toString() + '%22+-html+-htm+-php+-asp+-cf+-jpg+-jsp&oq=intitle%3A%22index.of%22+%28MP4G%29+%22' + movie.toString() + '%22+-html+-htm+-php+-asp+-cf+-jpg+-jsp&gs_lcp=CgZwc3ktYWIQDFDvng9Y754PYO2uD2gAcAF4AIAB0QKIAdECkgEDMy0xmAEAoAECoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjl-5L30N_tAhViyoUKHdZBDocQ4dUDCA0';
    window.open(search, '_blank');
  }
}
