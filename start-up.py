import threading
import subprocess

def async_startup():
    command_line_args = ['node', 'ortus/server.js']
    process = subprocess.Popen(command_line_args)

startup_thread = threading.Thread(name='async-startup', target=async_startup)
startup_thread.daemon = True
startup_thread.start()
