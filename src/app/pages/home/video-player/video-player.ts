import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../../layout/service/layout-service';

@Component({
  selector: 'app-video-player',
  imports: [CommonModule],
  template: `
<div 
  class="player-wrapper"
  [class.cursor-hidden]="isMuted"
  [class.cursor-visible]="!isMuted"
  (mouseenter)="!isMuted ? null : layout.setCursor(['WATCH', 'REEL'])"
  (mouseleave)="layout.resetCursor(); showControls = false"
  (mousemove)="onMouseMove()">
  <video
    #videoEl
    class="video"
    src="videos/video.mp4"
    muted
    playsinline
    loop
    (timeupdate)="onTimeUpdate(videoEl)"
    (loadedmetadata)="onLoadedMetadata(videoEl)"
    (click)="toggleMute(videoEl)"
  ></video>
</div>
  `,
  styleUrl: './video-player.css',
})
export class VideoPlayer implements AfterViewInit {
  layout = inject(LayoutService)
  @ViewChild('videoEl') videoRef!: ElementRef<HTMLVideoElement>;

  isPlaying = false;
  isMuted = true;
  progress = 0;
  currentTime = '0:00';
  duration = '0:00';
  showControls = false;
  private hideTimeout: any;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().then(() => this.isPlaying = true).catch(() => { });
  }

  togglePlay(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMute(video: HTMLVideoElement) {
    video.muted = !video.muted;
    this.isMuted = video.muted;

    if (!video.muted) {
      this.layout.resetCursor();
    } else {
      this.layout.setCursor(['WATCH', 'REEL']);
    }
  }

  onTimeUpdate(video: HTMLVideoElement) {
    this.progress = (video.currentTime / video.duration) * 100 || 0;
    this.currentTime = this.formatTime(video.currentTime);
  }

  onLoadedMetadata(video: HTMLVideoElement) {
    this.duration = this.formatTime(video.duration);
  }

  seek(event: MouseEvent, video: HTMLVideoElement) {
    const bar = event.currentTarget as HTMLElement;
    const rect = bar.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    video.currentTime = ratio * video.duration;
  }

  onEnded() {
    const video = this.videoRef.nativeElement;
    video.currentTime = 0;
    video.play();
  }

  onMouseMove() {
    this.showControls = true;
    clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => {
      if (this.isPlaying) this.showControls = false;
    }, 3000);
  }

  formatTime(s: number): string {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }
}